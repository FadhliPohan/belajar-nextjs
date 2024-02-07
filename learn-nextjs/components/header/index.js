import { useQueries } from "@/hooks/useQueries";
import Menu from "../menu";
import { withAuth } from "../with-auth";
import Cookies from "js-cookie";
import { useMutation } from "@/hooks/useMutation";
import { mutate } from "swr";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContect } from "@/context/userContext";

const Header = () => {
  const { mutate } = useMutation();
  const router = useRouter();
  const toast = useToast();
  const userData = useContext(UserContect);
  // const { data, isLoading, isError } = useQueries({
  //   prefixUrl: "https://paace-f178cafcae7b.nevacloud.io/api/user/me",
  //   headers: {
  //     Authorization: `Bearer ${Cookies.get("user_token")}`,
  //   },
  // });
  console.log(userData);

  const HandleLogout = async () => {
    const response = await mutate({
      url: "https://paace-f178cafcae7b.nevacloud.io/api/logout",
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("user_token")}`,
      },
    });

    console.log(response);
    if (!response?.success) {
      toast({
        title: "Logout Gagal !",
        description: "Username atau Pasword yang anda masukkan salah",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      Cookies.remove("user_token");
      // router.push("/login");
    } else {
      Cookies.remove("user_token");
      router.push("/login");
      toast({
        title: "Sukses Logout !",
        description: "Username berhasil untuk Logout",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div>
      <Menu></Menu>
      <p>{userData?.name}</p>
      {/* <p>{data?.data?.name}</p> */}
      <Button onClick={() => HandleLogout()}>Logout</Button>
    </div>
  );
};

export default withAuth(Header);
