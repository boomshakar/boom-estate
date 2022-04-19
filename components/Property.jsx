import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill, BsWhatsapp, BsFillTelephoneOutboundFill, BsFillPersonFill } from "react-icons/bs";
import { GoVerified, GoUnverified } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg";
// import "../styles/test.scss";
import styles from "../styles/Home.module.scss";

const Property = ({
	property: {
		coverPhoto,
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		externalID,
		contactName,
		phoneNumber,
		location,
	},
}) => {
	const router = useRouter();
	// copy initLocationArr : location
	let newLocationArr = [].concat(location).reverse();
	let convertedLocationStr = newLocationArr.map(({ name }) => name);
	// console.log({ re: convertedLocationStr.join(", ") });

	return (
		// <Link href={`/property/${externalID}`} passHref>
		<Box p="3" mx="auto" justifyContent="center" role="group" w="300px">
			<Flex
				flexWrap="wrap"
				flexDirection="column"
				justifyContent="flex-start"
				border="1px"
				borderColor="gray.200"
				borderTopRadius="20px"
				borderBottomRadius="20px"
				bg="rgba(255, 255, 255, 0.5)"
				_groupHover={{
					// backgroundColor: "black.300",
					borderBottomRadius: "0px",
					boxShadow: "0px 34px 44px -6px",
					transition: "all .3s ease-in-out ",
				}}
			>
				<Link href={`/property/${externalID}`} passHref>
					<Box cursor="pointer" p="3" paddingBottom="0px">
						{/* <Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={375} height={260} /> */}
						<Image
							src={coverPhoto.url || DefaultImage}
							alt="house"
							width={375}
							height={260}
							style={{ borderRadius: "10px" }}
						/>
					</Box>
				</Link>
				<Box w="full" p="3" paddingTop="0px">
					<Flex paddingTop="2" alignItems="center" justifyContent="space-between">
						<Flex alignItems="center">
							<Box paddingRight="3" color={`${isVerified && "green.400"}`}>
								{isVerified ? <GoVerified /> : <GoUnverified />}
							</Box>
							<Text fontWeight="bold" fontSize="18px">
								AED {millify(price)}
								{rentFrequency && `/${rentFrequency}`}
							</Text>
						</Flex>
						<Box>
							<Avatar size="sm" src={agency?.logo?.url}></Avatar>
						</Box>
					</Flex>
					<Flex alignItems="center" p="1" justifyContent="space-between" w="full" color="blue.400">
						<Flex flexDirection="column">
							<Flex fontSize="16px" color="#555658" fontWeight="bold" alignItems="center">
								<Box>
									<FaBed />
								</Box>
								<Text ml="5px">{rooms}</Text>
							</Flex>
							<Text color="#7988A2" fontSize="14px">
								{rooms <= 1 ? "Bedroom" : "Bedrooms"}
							</Text>
						</Flex>
						<Flex flexDirection="column">
							<Flex fontSize="16px" color="#555658" fontWeight="bold" alignItems="center">
								<Box>
									<FaBath />
								</Box>
								<Text ml="5px">{baths}</Text>
							</Flex>
							<Text color="#7988A2" fontSize="14px">
								{baths <= 1 ? "Bathroom" : "Bathrooms"}
							</Text>
						</Flex>
						<Flex flexDirection="column">
							<Flex fontSize="16px" color="#555658" fontWeight="bold" alignItems="center">
								<Box>
									<BsGridFill />
								</Box>
								<Text ml="5px">{millify(area)} sqft</Text>
							</Flex>
							<Text color="#7988A2" fontSize="14px">
								Land Space
							</Text>
						</Flex>
					</Flex>
					{/* <Text fontSize="lg" my="3" title={title}>
						{title.length > 30 ? title.substring(0, 30) + "..." : title}
					</Text>
					<Flex flexWrap="wrap" alignItems="center" marginTop="5" justifyContent="space-between">
						<Flex flexWrap="wrap">
							<Link href={`tel:${phoneNumber?.phone || phoneNumber?.mobile}`} passHref>
								<Flex
									marginRight="3"
									alignItems="center"
									justifyContent="center"
									color="green.400"
									borderRadius="5px"
									px="1.5"
									bg="gray.200"
									cursor="pointer"
								>
									<BsFillTelephoneOutboundFill />
									<Text marginLeft="2" fontSize="md" fontWeight="500" color="black">
										Call
									</Text>
								</Flex>
							</Link>
							<Link href={`https://wa.me/${phoneNumber?.whatsapp}`} passHref>
								<Flex
									alignItems="center"
									justifyContent="center"
									color="green.400"
									borderRadius="5px"
									px="1.5"
									bg="gray.200"
									cursor="pointer"
								>
									<BsWhatsapp />
									<Text marginLeft="2" fontSize="md" fontWeight="500" color="black">
										WhatsApp
									</Text>
								</Flex>
							</Link>
						</Flex>
						<Flex alignItems="center" justifyContent="center" borderRadius="5px" px="1" bg="blue.100">
							<BsFillPersonFill />
							<Text fontSize="md" marginLeft="1.5">
								{contactName}
							</Text>
						</Flex>
					</Flex> */}
				</Box>
			</Flex>
			<Flex
				// w="402px"
				// h="80px"
				minH="80px"
				alignItems="center"
				justifyContent="space-between"
				borderBottomRadius="10px"
				px="12px"
				py="10px"
				bg="transparent"
				_groupHover={{
					backgroundColor: "#2A292E",
					transition: "all .3s ease-in-out ",
				}}
			>
				<Flex alignItems="center">
					<Box
						color="#7989A2"
						fontSize="30px"
						_groupHover={{
							color: "#B2B2B2",
							transition: "all .3s ease-in-out ",
						}}
					>
						<HiOutlineLocationMarker />
					</Box>
					<Text
						fontSize="sm"
						title={convertedLocationStr.join(", ")}
						color="#7989A2"
						px="5px"
						_groupHover={{
							color: "#B2B2B2",
							transition: "all .3s ease-in-out ",
						}}
					>
						{convertedLocationStr.join(", ")}
					</Text>
				</Flex>
				<Button
					onClick={() => {
						router.push(`/property/${externalID}`);
					}}
					bg="#725CFF"
					color="#fff"
					padding="10px 20px"
					fontSize="sm"
					borderRadius="15px"
					_hover={{
						bg: "#8f7dff",
						color: "#ededed",
						transition: "all .3s ease-in-out ",
					}}
				>
					View
				</Button>
			</Flex>
		</Box>
		// {/* </Link> */}
	);
};

export default Property;
