import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

class ListObjetcs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        { id: 1, name: "Meu Vivo Fixo" },
        { id: 2, name: "Meu Vivo Movel" },
        { id: 3, name: "Meu Vivo TV" }
      ],
      refreshing: false
    };
  }

  renderItems(item) {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={{ marginRight: 10, fontSize: 20 }}>{item.id}</Text>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
      </View>
    );
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    });

    let data = this.state.plans;
    for (let i = 1; i <= 5; i++) {
      let count = data.length + 1;
      data.push({ id: count, name: `Meu Vivo TV ${count}` });
    }

    this.setState({
      plans: data,
      refreshing: false
    });
  }

  handleInfinitScrollRefresh() {
    this.setState({
      refreshing: true
    });

    setTimeout(() => {
      let data = this.state.plans;
      for (let i = 1; i <= 5; i++) {
        let count = data.length + 1;
        data.push({ id: count, name: `Meu Vivo TV ${count}` });
      }

      this.setState({
        plans: data,
        refreshing: false
      });
    }, 1000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <View style={{ margin: 15, marginHorizontal: 50 }}>
          <FlatList
            data={this.state.plans}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => this.renderItems(item)}
            onRefresh={() => this.handleRefresh()}
            refreshing={this.state.refreshing} //Control refreshing shows activityIndicator
            onEndReached={() => this.handleInfinitScrollRefresh()} //Use to inifity scroll to fetch new data
            onEndReachedThreshold={0.5} //When I see 0.5 of last data I call onEndReached
          />
        </View>
      </View>
    );
  }
}
export default ListObjetcs;
