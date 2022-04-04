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
	},
}) => (
	<Link href={`/property/${externalID}`} passHref>
		<Flex flexWrap="wrap" w="420px" p="5" paddingTop="0px" justifyContent="flex-start" cursor="pointer">
			<Box>
				<Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={400} height={260} />
			</Box>
			<Box w="full">
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
						<Avatar size="sm" src={agency?.logo?.url}></Avatar>
					</Box>
				</Flex>
				<Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
					{rooms}
					<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
				</Flex>
				<Text fontSize="lg">{title.length > 30 ? title.substring(0, 30) + "..." : title}</Text>
				<Flex flexWrap="wrap" alignItems="center" p="1" justifyContent="space-between">
					<Flex flexWrap="wrap">
						<Flex
							marginRight="3"
							alignItems="center"
							justifyContent="center"
							color="green.400"
							borderRadius="5px"
							px="1"
							bg="gray.100"
							onClick={() => {}}
						>
							<BsFillTelephoneOutboundFill />
							<Text marginLeft="2" fontSize="lg" color="black" fontWeight="500">
								Call
							</Text>
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="center"
							color="green.400"
							borderRadius="5px"
							px="1"
							bg="gray.100"
							onClick={() => {}}
						>
							<BsWhatsapp />
							<Text marginLeft="2" fontSize="lg" color="black" fontWeight="500">
								WhatsApp
							</Text>
						</Flex>
					</Flex>
					<Flex alignItems="center" justifyContent="center" borderRadius="5px" px="1" bg="blue.100">
						<BsFillPersonFill />
						<Text fontSize="lg" marginLeft="1.5">
							{contactName}
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	</Link>
);

export default Property;
