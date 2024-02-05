import React from "react";
import { HStack, Box, Text, Card, CardBody } from "@chakra-ui/react";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <Box>
        <HStack spacing="4" justifyContent="flex-end" margin="3">
          <Link href="/" variant="link">
            Home
          </Link>
          <Link href="/profile" variant="link">
            Profil
          </Link>
          <Link href="/user" variant="link">
            User
          </Link>
          <Link href="/user/detail" variant="link">
            User Detail
          </Link>
          <Link href="/posts" variant="link">
            Posts
          </Link>
          <Link href="/notes" variant="link">
            Notes
          </Link>
          <Link href="/catatan" variant="link">
            Catatan
          </Link>
        </HStack>
      </Box>
    </div>
  );
};

export default Menu;
