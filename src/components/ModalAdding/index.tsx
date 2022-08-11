import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Button,
  Grid,
  Flex,
  Box,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputLeftAddon,
  InputGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";

function ModalAdding() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Add Item</Button>

      <Modal isOpen={isOpen} size="6xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid gap={8}>
              <Box>
                <Text>Name of the Product</Text>
                <Input placeholder="enter name" />
              </Box>
              <Box>
                <Text>Amount Spent</Text>
                <InputGroup>
                  <InputLeftAddon h="ms">so`m</InputLeftAddon>
                  <NumberInput
                    step={50000}
                    size="lg"
                    defaultValue={150000}
                    min={0}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </InputGroup>
              </Box>
              <Box>
                <Text>Time</Text>
                <Input placeholder="enter time" />
              </Box>
              <Box>
                <FormControl as="fieldset">
                  <FormLabel as="legend">Categorie</FormLabel>
                  <RadioGroup defaultValue="Food">
                    <HStack spacing="24px">
                      <Radio value="Gifts">Gifts</Radio>
                      <Radio value="Repairing">Repairing</Radio>
                      <Radio value="Shopping">Shopping</Radio>
                      <Radio value="Food">Food</Radio>
                      <Radio value="Transpo">Transportation</Radio>
                      <Radio value="Leisure">Leisure</Radio>
                      <Radio value="Family">Family</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalAdding;
