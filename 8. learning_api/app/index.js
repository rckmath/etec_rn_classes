import { useState, useEffect } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import { Text, Searchbar, Card } from "react-native-paper";

import { getPokemonByNameOrId, getPokemons } from "./_services/pokemon";

const PAGE_SIZE = 20;

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemons({ offset: 0, limit: PAGE_SIZE }).then((res) => {
      const pokemonList = res.results;
      setPokemons(pokemonList);
      setPokemonsFiltered(pokemonList);
    });
  }, []);

  const handleSearch = (query) => {
    setSearch(query);
    if (query.trim() === "") {
      setPokemonsFiltered(pokemons);
    } else {
      const filtered = pokemons.filter((p, index) => p.name.toLowerCase().includes(query.toLowerCase()) || (index + 1).toString().includes(query));

      if (filtered.length === 0) {
        getPokemonByNameOrId(query).then((res) => {
          setPokemonsFiltered([res]);
        });
      }

      setPokemonsFiltered(filtered);
    }
  };

  const loadMore = () => {
    if (search.trim() !== "") return;

    getPokemons({ offset: page * PAGE_SIZE, limit: PAGE_SIZE }).then((res) => {
      const newPokemons = res.results;
      setPokemons([...pokemons, ...newPokemons]);
      setPokemonsFiltered([...pokemons, ...newPokemons]);
    });

    setPage(page + 1);
  };

  const renderItem = ({ item }) => {
    let pokemonIndex = pokemons.findIndex((p) => p.name === item.name);

    if (pokemonIndex === -1) {
      pokemonIndex = item?.id - 1;
    }

    return (
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex + 1}.png` }}
            style={styles.image}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.number}>{pokemonIndex + 1}</Text>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <Searchbar placeholder="Buscar Pokémon" value={search} onChangeText={handleSearch} style={{ margin: 16, borderRadius: 16 }} />
      <FlatList
        data={pokemonsFiltered}
        renderItem={renderItem}
        keyExtractor={(item) => {
          const pokemonIndex = pokemons.findIndex((p) => p.name === item.name);
          return pokemonIndex.toString();
        }}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ padding: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 24,
    overflow: "hidden",
    minHeight: 120,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 96,
    height: 96,
    marginRight: 24,
  },
  name: {
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: "bold",
  },
  number: {
    fontSize: 22,
    color: "#888",
    marginTop: 8,
  },
});

export default HomeScreen;
