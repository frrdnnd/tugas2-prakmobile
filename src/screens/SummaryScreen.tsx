import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CourseCard from '../components/CourseCard';
import ListHeader from '../components/ListHeader';
import { courses } from '../data/academicData';
import { colors } from '../theme/theme';

export default function SummaryScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ListHeader
          title="Ringkasan Mata Kuliah"
          subtitle="Mata kuliah semester ini, dirender dengan .map()"
        />
        <View style={styles.list}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  list: {
    paddingHorizontal: 16,
  },
});
