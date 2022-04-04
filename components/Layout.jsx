import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Boom Estate</title>
			</Head>
			<Box maxWidth="1280px" m="auto">
				<header>
					<Navbar />
				</header>
				<Box as="main" pt={20}>
					{children}
				</Box>
				<footer>
					<Footer />
				</footer>
			</Box>
		</>
	);
}
