import React, { Component } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";

class PlanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      products: []
    };
    this.renderItems = this.renderItems.bind(this);
   
  }

  componentDidMount(){
    this.renderItems();
  }
  renderItems() {
    let products = [];
    for (let index = 0; index < 10; index++) {
        products.push(<Text key={index}>{`Produtos ${index}`}</Text>);
    }
    this.setState({ products: products  });
    return products;
  }

  renderItemsRefresh() {
    console.log("Entrou Refrsh");
    this.setState({ refreshing: true });
    let products = this.state.products;
    for (let index = 0; index <= 10; index++) {
        let count = products.length;
        products.push(<Text key={count}>{`Produtos ${count}`}</Text>);
    }
    this.setState({ refreshing: false, products: products  });
    return products;
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          borderBottomColor: "red",
          borderWidth: 3
        }}
        scrollEnabled={true}
        horizontal={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this.renderItemsRefresh()}
            progressBackgroundColor="orange"
            size={RefreshControl.SIZE.LARGE}
            colors={["blue"]}
            title="Aguarde..."
            progressViewOffset={10}
          />
        }
      >
        <View>{this.state.products}</View>
      </ScrollView>
    );
  }
}

export default PlanScreen;
