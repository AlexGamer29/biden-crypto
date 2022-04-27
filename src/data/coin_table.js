import "../components/css/cointable.css";
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import bitcoin from './img/bitcoin.png'

const CoinTable = () => {
  return (
    <div className="table-container">
      <Table>
        <Thead>
          <Tr>
            <Th style={{width:'5%'}}>#</Th>
            <Th style ={{width:'50%'}}>Name</Th>
            <Th style={{width:'20%'}}>Price</Th>
            <Th style ={{width:'15%'}}>Change</Th>
            <Th style={{width:'10%'}}>Trade</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Bitcoin</Td>
            <Td>₫880,081,597.44</Td>
            <Td style={{color:'red'}}>-5.40%</Td>
            <Td><button className="buy-button">Buy</button></Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>BNB</Td>
            <Td>₫65,064,889.98</Td>
            <Td style={{color:'red'}}>-5.40%</Td>
            <Td><button className="buy-button">Buy</button></Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Etherium</Td>
            <Td>19,142.14</Td>
            <Td style={{color:'red'}}>-5.40%</Td>
            <Td><button className="buy-button">Buy</button></Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default CoinTable;
