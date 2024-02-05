import dynamic from "next/dynamic";
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
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout = dynamic(() => import("@/layout"));

const Catatan = () => {
  const router = useRouter();
  const [notes, setNotes] = useState();

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
        fetchingData();
      }
    } catch (error) {}
  };

  async function fetchingData() {
    const res = await fetch(
      "https://paace-f178cafcae7b.nevacloud.io/api/notes"
    );
    const listNotes = await res.json();
    console.log(listNotes);
    setNotes(listNotes);
  }
  useEffect(() => {
    fetchingData();
  }, []);
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
              <Flex>
                <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                  {notes?.data?.map((item) => (
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
            </Box>
          </CardBody>
        </Card>
      </Layout>
    </div>
  );
};
export default Catatan;
