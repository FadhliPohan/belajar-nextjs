import dynamic from "next/dynamic";
import {
  Grid,
  GridItem,
  Card,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";
const Layout = dynamic(() => import("@/layout"));

const TambahCatatan = () => {
  const { mutate } = useMutation();
  const router = useRouter();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const HandleSubmit = async () => {
    // console.log(notes);
    const response = await mutate({
      url: "https://paace-f178cafcae7b.nevacloud.io/api/notes",
      payload: notes,
    });
    if (response?.success) {
      router.push("/catatan");
    }
   
  };

  return (
    <div>
      <Layout metaTitle="Catatan">
        <Card margin="5" padding="5">
          <Heading>Add Notes</Heading>
          <Grid gap="5">
            <GridItem>
              <Text>Title</Text>
              <Input
                type="text"
                onChange={(event) =>
                  setNotes({ ...notes, title: event.target.value })
                }
              />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea
                onChange={(event) =>
                  setNotes({ ...notes, description: event.target.value })
                }
              />
            </GridItem>
            <GridItem>
              <Button onClick={() => HandleSubmit()} colorScheme="blue">
                Tambah
              </Button>
            </GridItem>
          </Grid>
        </Card>
      </Layout>
    </div>
  );
};

export default TambahCatatan;
