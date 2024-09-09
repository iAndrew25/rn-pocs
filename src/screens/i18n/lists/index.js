import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

function Lists() {
  const {t} = useTranslation();
  const list = t('list', {returnObjects: true});

  return (
    <Fragment>
      <View style={styles.content}>
        {list.map(({title, description}) => (
          <View key={`${title}_${description}`}>
            {title && <Text style={styles.bold}>{title}</Text>}
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </View>
        ))}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: 16,
    gap: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  description: {
    marginLeft: 8,
  },
});

export default Lists;
