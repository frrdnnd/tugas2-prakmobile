import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Course } from '../types';
import { colors, fonts, radii, spacing, shadow } from '../theme/theme';

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.nama}>{course.nama}</Text>
        <View style={styles.sksBadge}>
          <Text style={styles.sksText}>{course.sks} SKS</Text>
        </View>
      </View>
      <Text style={styles.kode}>{course.kode}</Text>
      <View style={styles.divider} />
      <Text style={styles.dosenLabel}>Dosen Pengampu</Text>
      <Text style={styles.dosen}>{course.dosen}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadow.card,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  nama: {
    flex: 1,
    fontFamily: fonts.bodyBold,
    fontSize: 16,
    color: colors.text,
  },
  sksBadge: {
    backgroundColor: colors.roseSoft,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  sksText: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12,
    color: colors.roseDark,
  },
  kode: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.separator,
    marginVertical: spacing.md,
  },
  dosenLabel: {
    fontFamily: fonts.body,
    fontSize: 11,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  dosen: {
    fontFamily: fonts.bodyMedium,
    fontSize: 14,
    color: colors.text,
    marginTop: 2,
  },
});
