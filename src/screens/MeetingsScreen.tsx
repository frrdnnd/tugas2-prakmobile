import React, { useState } from 'react';
import { FlatList, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MeetingItem from '../components/MeetingItem';
import ListSeparator from '../components/ListSeparator';
import ListHeader from '../components/ListHeader';
import EmptyState from '../components/EmptyState';
import { meetings } from '../data/academicData';
import { Meeting } from '../types';
import { colors, fonts, spacing } from '../theme/theme';

export default function MeetingsScreen() {
  const [showEmpty, setShowEmpty] = useState(false);
  const data: Meeting[] = showEmpty ? [] : meetings;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeetingItem meeting={item} />}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={
          <>
            <ListHeader
              title="Daftar Pertemuan"
              subtitle="Seluruh pertemuan lintas mata kuliah, dirender dengan FlatList"
            />
            <Pressable
              style={styles.devToggle}
              onPress={() => setShowEmpty((prev) => !prev)}
            >
              <Text style={styles.devToggleText}>
                {showEmpty ? 'Tampilkan data pertemuan' : 'Coba tampilan kosong (dev)'}
              </Text>
            </Pressable>
          </>
        }
        ListEmptyComponent={
          <EmptyState
            title="Belum ada pertemuan"
            message="Tidak ada data pertemuan untuk ditampilkan saat ini."
          />
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingBottom: 32,
    flexGrow: 1,
  },
  devToggle: {
    alignSelf: 'flex-start',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.rose,
  },
  devToggleText: {
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
    color: colors.rose,
  },
});
