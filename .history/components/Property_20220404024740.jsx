import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill, BsWhatsapp, BsFillTelephoneOutboundFill, BsFillPersonFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg";

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
	},
}) => (
	// <Link href={`/property/${externalID}`} passHref>
	<Box p="3" paddingTop="0px" justifyContent="flex-start">
		<Flex
			flexWrap="wrap"
			w="402px"
			justifyContent="flex-start"
			border="1px"
			borderColor="gray.200"
			borderRadius="10px"
			_hover={{
				backgroundColor: "black.300",
				boxShadow: "md",
				rounded: "md",
				bg: "white",
			}}
		>
			<Link href={`/property/${externalID}`} passHref>
				<Box cursor="pointer" p="3" paddingBottom="0px">
					<Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={375} height={260} />
				</Box>
			</Link>
			<Box w="full" p="3" paddingTop="0px">
				<Flex paddingTop="2" alignItems="center" justifyContent="space-between">
					<Flex alignItems="center">
						<Box paddingRight="3" color="green.400">
							{isVerified && <GoVerified />}
						</Box>
						<Text fontWeight="bold" fontSize="lg">
							AED {millify(price)}
							{rentFrequency && `/${rentFrequency}`}
						</Text>
					</Flex>
					<Box>
						<Avatar size="md" src={agency?.logo?.url}></Avatar>
					</Box>
				</Flex>
				<Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
					{rooms}
					<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
				</Flex>
				<Text fontSize="lg" my="3" title={title}>
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
				</Flex>
			</Box>
		</Flex>
	</Box>
	// {/* </Link> */}
);

export default Property;
