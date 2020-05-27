import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.alt} />}
        <Link
          href={{
            pathname: "/item",
            query: { id: item.id },
          }}
        >
          <a>
            <Title>{item.title}</Title>
          </a>
        </Link>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link href="/update">
            <a>✏️ Edit</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;