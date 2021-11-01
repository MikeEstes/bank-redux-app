// Import Dependencies
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/accountSlice';

//import Account from '../../components/account';

// Create component
const BankScreen = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);

  const handleIncrementClick = () => {
    dispatch(increment(5));
  };

  const handleDecrementClick = () => {
    dispatch(decrement(5));
  };

  return (
    <View>
      <Text>{count}</Text>
      <TouchableOpacity onPress={handleIncrementClick}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDecrementClick}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

// Export Component
export default BankScreen;
