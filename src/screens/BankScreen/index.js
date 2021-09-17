// Import Dependencies
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../../redux/bankingSlice';

import Account from '../../components/account';

// Create component
const BankScreen = () => {
  const dispatch = useDispatch();
  const bank = useSelector(state => state.bank);
  const accountNumber = useSelector(state => state.bank.accountNumber);

  const handleDepositClick = () => {
    dispatch(deposit({ account: 1, amount: 5 }));
  };

  const handleWithdrawClick = () => {
    dispatch(withdraw({ account: 1, amount: 5 }));
  };

  return (
    <View>
      <FlatList
        style={styles.listContainer}
        data={bank}
        keyExtractor={(item, index) => item.accountNumber.toString()}
        renderItem={data => (
          <Account accountNumber={data.accountNumber} amount={data.amount} />
        )}
      />
      <TouchableOpacity onPress={handleDepositClick}>
        <Text>Deposit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWithdrawClick}>
        <Text>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

// Export Component
export default BankScreen;
