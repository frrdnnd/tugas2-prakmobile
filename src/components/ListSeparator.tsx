import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/theme';

export default function ListSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.md,
  },
});
