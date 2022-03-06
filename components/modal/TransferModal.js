import React, { useState } from "react";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import Receive from "./Receive";
import Transfer from "./Transfer";

const TransferModal = ({ sanityTokens, walletAddress, thirdWebTokens }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };
  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            walletAddress={walletAddress}
            selectedToken={selectedToken}
            thirdWebTokens={thirdWebTokens}
            setAction={setAction}
          />
        );
      case "select":
        return (
          <CoinSelector
            walletAddress={walletAddress}
            selectedToken={selectedToken}
            thirdWebTokens={thirdWebTokens}
            setAction={setAction}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
          />
        );
      case "receive":
        return (
          <Receive
            selectedToken={selectedToken}
            setAction={setAction}
            walletAddress={walletAddress}
          />
        );
      case "transferring":
        return <h2>'Transferring...'</h2>;
      case "transferred":
        return <h2>"Transfer Complete..."</h2>;
      default:
        return <h2>Transferred with Success</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
