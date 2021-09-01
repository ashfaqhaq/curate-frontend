import { Heading, Flex, Box, Spacer, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory, Link } from "react-router-dom";
function NavBar() {
  const history = useHistory();
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <Flex bg="gray.700">
      <Box p="2">
        <Link to="/">
          <Heading size="lg" px="4">
            Curate
          </Heading>
        </Link>
      </Box>
      <Spacer />

      <Spacer />

      <Box p="2">
        <Button
          colorScheme="blue"
          mr="4"
          onClick={() => history.push("/create")}
        >
          {isAuthenticated ? "Create Roadmap" : null}
        </Button>

        <Button colorScheme="orange" mr="4" d={{ xs:"none",sm: "none", md: "inline" }}>
          {isAuthenticated ? user?.nickname : "Join us"}
        </Button>
        {user ? (
          <Button mr="4" onClick={logout}>
            {" "}
            Log Out
          </Button>
        ) : null}
      </Box>
    </Flex>
  );
}

export default NavBar;
