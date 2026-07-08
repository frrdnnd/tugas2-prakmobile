import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScheduleItem from '../components/ScheduleItem';
import SectionHeader from '../components/SectionHeader';
import ListHeader from '../components/ListHeader';
import { scheduleSections } from '../data/academicData';
import { colors } from '../theme/theme';

export default function WeeklyScheduleScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <SectionList
        sections={scheduleSections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ScheduleItem item={item} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} count={section.data.length} />
        )}
        ListHeaderComponent={
          <ListHeader
            title="Jadwal per Hari"
            subtitle="Jadwal kelas dikelompokkan per hari, dirender dengan SectionList"
          />
        }
        stickySectionHeadersEnabled
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
  },
});
