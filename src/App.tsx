import styled from 'styled-components/native';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const NewText = styled.Text`
  background-color: #000;
  color: white;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Testing</Text>
      <NewText style={styles.container}>New Text</NewText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  }
})

export default App;
