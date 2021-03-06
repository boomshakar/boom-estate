import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, baseUrl2, fetchApi, fetchApi2 } from "../utils/fetchApi";

import homeImg from "../assets/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.svg";
import "../styles/Home.module.scss";

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
	<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
		<Image src={imageUrl} width={500} alt="" height={300} />
		<Box p="5">
			<Text color="gray.500" fontSize="sm" fontWeight="medium">
				{purpose}
			</Text>
			<Text fontSize="3xl" fontWeight="bold">
				{title1}
				<br />
				{title2}
			</Text>
			<Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
				{desc1}
				<br />
				{desc2}
			</Text>
			<Button fontSize="xl">
				<Link href={linkName}>
					<a>{buttonText}</a>
				</Link>
			</Button>
		</Box>
	</Flex>
);

const MainBanner = ({}) => (
	<Box
		// bgImage="url('/images/gaara.png')"
		bgPosition="center"
		bgSize="cover"
		bgRepeat="no-repeat"
		width="100%"
		height="100%"
		_before={{
			content: '""',
			bgImage:
				// `url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg)`,
				`url(${homeImg})`,
			bgSize: "cover",
			pos: "absolute",
			top: 0,
			right: 0,
			left: 0,
			bottom: 0,
			opacity: 0.9,
		}}
	>
		hhhh
	</Box>
);

const Home = ({ propertiesForSale, propertiesForRent }) => {
	// console.log({ propertiesForSale2 });
	// console.log({ propertiesForRent });
	// console.log({ propertiesForSale });

	return (
		<Box>
			{/* <MainBanner /> */}
			<Banner
				purpose="RENT A HOME"
				title1="Rental Homes for"
				title2="Everyone"
				desc1=" Explore from Apartments, builder floors, villas"
				desc2="and more"
				buttonText="Explore Renting"
				linkName="/search?purpose=for-rent"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
			/>
			<Flex flexWrap="wrap">
				{/* Fetch properties */}
				{propertiesForRent.map((property) => (
					<Property property={property} key={property.id} />
				))}
			</Flex>
			<Banner
				purpose="BUY A HOME"
				title1=" Find, Buy & Own Your"
				title2="Dream Home"
				desc1=" Explore from Apartments, land, builder floors,"
				desc2=" villas and more"
				buttonText="Explore Buying"
				linkName="/search?purpose=for-sale"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
			/>
			<Flex flexWrap="wrap">
				{propertiesForSale.map((property) => (
					<Property property={property} key={property.id} />
				))}
			</Flex>
		</Box>
	);
};

export async function getStaticProps() {
	const propertyForSale = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
	);
	// const propertyForSale2 = await fetchApi2();
	// `${baseUrl2}/properties/v2/list-for-sale?city=New York City&state_code=NY&limit=200&offset=0&sort=relevance`
	const propertyForRent = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
	);
	// const propertyForRent2 = await fetchApi2();
	// `${baseUrl2}/properties/v2/list-for-rent?city=New York City&state_code=NY&limit=200&offset=0&sort=relevance`

	return {
		props: {
			propertiesForSale: propertyForSale?.hits,
			// propertiesForSale2: propertyForSale2?.properties,
			propertiesForRent: propertyForRent?.hits,
			// propertiesForRent2: propertyForRent2?.properties,
		},
	};
}

export default Home;
