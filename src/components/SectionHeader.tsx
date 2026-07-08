import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../theme/theme';

type Props = {
  title: string;
  count: number;
};

export default function SectionHeader({ title, count }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count} kelas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.roseDark,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    borderRadius: 12,
  },
  title: {
    fontFamily: fonts.headingBold,
    fontSize: 18,
    color: colors.white,
  },
  count: {
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
    color: colors.roseSoft,
  },
});
