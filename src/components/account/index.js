// Import Dependencies
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// Create component
const Account = ({ accountNumber, amount }) => {
  return (
    <View>
      <Text>Account Number: {accountNumber}</Text>
      <Text>Amount: {amount}</Text>
    </View>
  );
};

// Export Component
export default Account;
