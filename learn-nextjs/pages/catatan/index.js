import dynamic from "next/dynamic";
import { Spinner } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueries } from "@/hooks/useQueries";

const Layout = dynamic(() => import("@/layout"));

const Catatan = () => {
  const { data, isLoading, isError } = useQueries({
    prefixUrl: "https://paace-f178cafcae7b.nevacloud.io/api/notes",
  });
  const router = useRouter();

  const HandleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result?.success) {
        router.push("/catatan");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Layout metaTitle="Catatan">
        <Card>
          <CardBody>
            <Box padding="5">
              <Flex justifyContent="end">
                <Button
                  colorScheme="blue"
                  onClick={() => router.push("/catatan/add")}
                >
                  Tambah Catatan
                </Button>
              </Flex>
              {isLoading ? (
                <Flex alignItems="center" justifyContent="center">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Flex>
              ) : (
                <Flex>
                  <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                    {data?.data?.map((item) => (
                      <GridItem>
                        <Card>
                          <CardHeader>
                            <Heading>{item?.title}</Heading>
                          </CardHeader>
                          <CardBody>
                            <Text>{item?.description}</Text>
                          </CardBody>
                          <CardFooter justify="space-between" flexWrap="wrap">
                            <Button
                              onClick={() =>
                                router.push(`/catatan/edit/${item?.id}`)
                              }
                              flex="1"
                              variant="ghost"
                            >
                              Edit
                            </Button>
                            <Button
                              flex="1"
                              colorScheme="red"
                              onClick={() => HandleDelete(item?.id)}
                            >
                              Delete
                            </Button>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    ))}
                  </Grid>
                </Flex>
              )}
            </Box>
          </CardBody>
        </Card>
      </Layout>
    </div>
  );
};
export default Catatan;
