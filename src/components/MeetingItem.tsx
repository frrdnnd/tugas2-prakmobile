import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Meeting } from '../types';
import { colors, fonts, radii, spacing, shadow } from '../theme/theme';

type Props = {
  meeting: Meeting;
};

export default function MeetingItem({ meeting }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.pertemuanBadge}>
        <Text style={styles.pertemuanText}>P{meeting.pertemuanKe}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.matkul}>{meeting.namaMatkul}</Text>
        <Text style={styles.topik}>{meeting.topik}</Text>
        <Text style={styles.tanggal}>{meeting.tanggal}</Text>
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
    gap: spacing.md,
    ...shadow.card,
  },
  pertemuanBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.roseTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pertemuanText: {
    fontFamily: fonts.bodyBold,
    fontSize: 13,
    color: colors.roseDark,
  },
  content: {
    flex: 1,
  },
  matkul: {
    fontFamily: fonts.bodyBold,
    fontSize: 15,
    color: colors.text,
  },
  topik: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.text,
    marginTop: 4,
  },
  tanggal: {
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 6,
  },
});
