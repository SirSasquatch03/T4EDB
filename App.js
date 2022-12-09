import 'react-native-gesture-handler';
import { createRef, useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import React from "react";

import HomePage from './components/Pages/Home.Component';
import CardsPage from './components/Pages/Cards';
import Expantions from './components/Pages/Expantions';
import Tokens from './components/Pages/Tokens';
import Boards from './components/Pages/Boards';
import ExpandableDrawerItem from './Parts/ExpandableDrawerItem';
import AdvSearchPage from './components/Pages/AdvancedSearch.page';
import SubPage from './components/Pages/subPages/SubPage';
import HomePageLogo from './assets/HomePageLogo.png'
import CardDetailsPage from './components/Pages/CardDetails';


const Drawer = createDrawerNavigator();


function DrawerContent(props) {
  const choices1 = [
    {name:"Cards", page:"Cards"}
  ]

  const ExpansionChoices = [
    {name:"The Blood Moon Expansion", page:"BloodMoon", filterType:"Expantion"},
    {name:"The Cataclysm Expansion", page:"TheCataclysm", filterType:"Expantion"},
    {name:"The City Expansion", page:"City", filterType:"Expantion"},
    {name:"The Deep Realms Expansion", page:"TheDeepRealm", filterType:"Expantion"},
    {name:"The Dragon Expansion", page:"Dragon", filterType:"Expantion"},
    {name:"The Dungeon Expansion", page:"Dungeon", filterType:"Expantion"},
    {name:"The Firelands Expansion", page:"Firelands", filterType:"Expantion"},
    {name:"The Frostmarch Expansion", page:"Frostmarch", filterType:"Expantion"},
    {name:"The Harbinger Expansion", page:"Harbinger", filterType:"Expantion"},
    {name:"The Highland Expansion", page:"Highland", filterType:"Expantion"},
    {name:"The Lost Realms Expansion", page:"LostRealm", filterType:"Expantion"},
    {name:"The Nether Realm Expansion", page:"NeatherRealm", filterType:"Expantion"},
    {name:"The Reaper Expansion", page:"Reaper", filterType:"Expantion"},
    {name:"The Sacred Pool Expansion", page:"SacredPool", filterType:"Expantion"}


  ]

    const CardChoices = [
      {name:"Adventure Cards", page:"AdventureCards", filterType:"Deck"},
      {name:"Alternate Endings", page:"AltEnd", filterType:"Deck"},
      {name:"Characters", page:"CharacterCards", filterType:"Deck"},
      {name:"NPC's", page:"NPC", filterType:"Deck"},
      {name:"Other Cards", page:"OtherCards", filterType:"Deck"},
    ]


    const BoardChoices = [
      {name:"All Board Spaces", page:"AllSpaces", filterType:"Region"},
      {name:"Base Board", page:"BaseBoard", filterType:"Region"},
      {name:"Cataclysm Board", page:"CataclysmBoard", filterType:"Region"},
      {name:"City Board", page:"CityBoard", filterType:"Region"},
      {name:"Dungon Board", page:"DungonBoard", filterType:"Region"},
      {name:"Woodland Board", page:"WoodlandBoard", filterType:"Region"},
      {name:"Highland Board", page:"HighlandBoard", filterType:"Region"},
      {name:"Rat Queen's Lair", page:"RatQueensLair", filterType:"Region"},
      {name:"Wraith Lord's Domain", page:"WraithLordsDomain", filterType:"Region"},
    ]







  return(
    // Navbar container
    <View>
      <View style={{height:'10%', width:'100%', marginTop:'13%'}}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: 'contain'
          }}
          source={HomePageLogo}
        />
      </View>
      <ScrollView 
        style={{height:'80%', marginTop:'15%'}}
      >
        

        <ExpandableDrawerItem
          title={'Cards'}
          choices={CardChoices}
          isExpanded={false}
          navigation={props.navigation}
        />

        <ExpandableDrawerItem
          title={'Expansions'}
          choices={ExpansionChoices}
          isExpanded={false}
          navigation={props.navigation}
        />

      <ExpandableDrawerItem
          title={'Boards'}
          choices={BoardChoices}
          isExpanded={false}
          navigation={props.navigation}
        />

      </ScrollView>
    </View>
  )
}

export default function App() {

  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Advanced Search" component={AdvSearchPage} />
        <Drawer.Screen name="Cards" component={CardsPage} />
        <Drawer.Screen name="Expantions" component={Expantions} />
        <Drawer.Screen name="Boards" component={Boards} />
        <Drawer.Screen name="SubPage" component={SubPage}/>
        <Drawer.Screen name="CardDets" component={CardDetailsPage}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  }
});
