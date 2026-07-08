import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScheduleItem as ScheduleItemType } from '../types';
import { colors, fonts, radii, spacing, shadow } from '../theme/theme';

type Props = {
  item: ScheduleItemType;
};

export default function ScheduleItem({ item }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.timeColumn}>
        <Text style={styles.jamMulai}>{item.jamMulai}</Text>
        <View style={styles.timeDivider} />
        <Text style={styles.jamSelesai}>{item.jamSelesai}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.matkul}>{item.namaMatkul}</Text>
        <View style={styles.ruanganRow}>
          <Ionicons name="location-outline" size={14} color={colors.textMuted} />
          <Text style={styles.ruangan}>{item.ruangan}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    gap: spacing.md,
    ...shadow.card,
  },
  timeColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 56,
  },
  jamMulai: {
    fontFamily: fonts.bodyBold,
    fontSize: 14,
    color: colors.roseDark,
  },
  timeDivider: {
    width: 1,
    height: 10,
    backgroundColor: colors.separator,
    marginVertical: 2,
  },
  jamSelesai: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textMuted,
  },
  content: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: colors.separator,
    paddingLeft: spacing.md,
  },
  matkul: {
    fontFamily: fonts.bodyBold,
    fontSize: 15,
    color: colors.text,
  },
  ruanganRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  ruangan: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.textMuted,
  },
});
