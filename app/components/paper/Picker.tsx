import React, { useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Constants from '@/constants';
import { storeData, LANGUAGE_KEY } from '@/utils/storage';
import { LANGUAGES, labelSwitch } from '@/utils/translate';

export const Picker = ({
  type,
  evidence,
  setEvidence,
  evidenceArr,
  setGhost,
  setLanguage,
  language,
}) => {
  let labels = labelSwitch(language);
  const evidenceList = [
    labels.noEvidence, //0
    labels.emf5, //1
    labels.spiritBox, //2
    labels.fingerprints, //3
    labels.ghostOrb, //4
    labels.ghostWriting, //5
    labels.freezingTemp, //6
    labels.dotsProjector //7
  ];

  // evidence number is the index in evidenceList
  const ghostList = [
    {
      name: labels.notYedDiscovered,
      evidence: [0, 0, 0],
    },
    {
      name: labels.spirit,
      evidence: [1, 5, 2],
    },
    {
      name: labels.wraith,
      evidence: [1, 2, 7],
    },
    {
      name: labels.phantom,
      evidence: [2, 3, 7],
    },
    {
      name: labels.poltergeist,
      evidence: [5, 2, 3],
    },
    {
      name: labels.banshee,
      evidence: [4, 3, 7],
    },
    {
      name: labels.jinn,
      evidence: [1, 6, 3],
    },
    {
      name: labels.mare,
      evidence: [4, 5, 2],
    },
    {
      name: labels.revenant,
      evidence: [4, 5, 6],
    },
    {
      name: labels.shade,
      evidence: [1, 5, 6],
    },
    {
      name: labels.demon,
      evidence: [6, 5, 3],
    },
    {
      name: labels.yurei,
      evidence: [4, 6, 7],
    },
    {
      name: labels.oni,
      evidence: [1, 6, 7],
    },
    {
      name: labels.hantu,
      evidence: [3, 4, 6],
    },
    {
      name: labels.yokai,
      evidence: [4, 2, 7],
    },
    {
      name: labels.goryo,
      evidence: [1, 3, 7]
    },
    {
      name: labels.myling,
      evidence: [1, 3, 5]
    },
    {
      name: labels.onryo,
      evidence: [2, 4, 6]
    },
    {
      name: labels.obake,
      evidence: [1, 3, 4]
    },
    {
      name: labels.theTwins,
      evidence: [1, 2, 6]
    },
    {
      name: labels.raiju,
      evidence: [1, 4, 7]
    }
  ];

  if (type == 'evidence') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ width: wp('100%') / 8, alignItems: 'flex-start' }}
          onPress={() => {
            setGhost(0);
            setEvidence(evidence == 0 ? evidenceList.length - 1 : evidence - 1);
          }}>
          <Icon type='font-awesome-5' name='angle-left' size={wp('100%') / 8} />
        </TouchableOpacity>
        <Text style={styles.pickerText}>{evidenceList[evidence]}</Text>
        <TouchableOpacity style={{ width: wp('100%') / 8, alignItems: 'flex-end' }}>
          <Icon
            type='font-awesome-5'
            name='angle-right'
            size={wp('100%') / 8}
            onPress={() => {
              setGhost(0);
              setEvidence((evidence + 1) % evidenceList.length);
            }}
          />
        </TouchableOpacity>
      </View>
    );
  } else if (type == 'ghost') {
    //Filter out the ghost list
    const ghostPickerList = ghostList.filter((ghost, index) => {
      let passes = true;
      evidenceArr.forEach((e) => {
        if (e > 0 && !ghost.evidence.includes(e) && index > 0) {
          passes = false;
        };
      });
      return passes;
    });

    let possibleEvidence = [];
    ghostPickerList.forEach((ghost) => {
      possibleEvidence.push(
        ghost.evidence[0],
        ghost.evidence[1],
        ghost.evidence[2],
      );
    });
    possibleEvidence = Array.from(new Set(possibleEvidence));
    possibleEvidence = possibleEvidence.filter((evidence) => {
      if (evidenceArr.includes(evidence) || evidence == 0) {
        return false;
      };
      return true;
    });
    possibleEvidence.sort();
    const possibleEvidenceText = possibleEvidence.map(
      (evidence) => evidenceList[evidence] + ', ',
    );

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={{ width: wp('100%') / 8, alignItems: 'flex-start' }}
            onPress={() => {
              setEvidence(
                evidence == 0 ? ghostPickerList.length - 1 : evidence - 1,
              );
            }}>
            <Icon type='font-awesome-5' name='angle-left' size={wp('100%') / 8} />
          </TouchableOpacity>
          <Text style={styles.pickerText}>
            {ghostPickerList[evidence] && ghostPickerList[evidence].name
              ? ghostPickerList[evidence].name
              : ghostPickerList[0].name}
          </Text>
          <TouchableOpacity style={{ width: wp('100%') / 8, alignItems: 'flex-end' }}>
            <Icon
              type='font-awesome-5'
              name='angle-right'
              size={wp('100%') / 8}
              onPress={() => {
                setEvidence((evidence + 1) % ghostPickerList.length);
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.evidenceRemainingContainer}>
          <Text style={styles.header}>{labels.evidenceRemaining}:</Text>
          <Text style={styles.text}>
            {possibleEvidence.length >= 6
              ? labels.all
              : possibleEvidence.length == 0
                ? labels.none
                : possibleEvidenceText}
          </Text>
        </View>
      </>
    );
  } else if (type == 'language') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ width: wp('100%') / 8, alignItems: 'flex-start' }}
          onPress={() => {
            const newIndex =
              evidence == 0 ? LANGUAGES.length - 1 : evidence - 1;
            setEvidence(newIndex);
            setLanguage(LANGUAGES[newIndex].key);
            storeData(LANGUAGE_KEY, LANGUAGES[newIndex].key);
          }}>
          <Icon type='font-awesome-5' name='angle-left' size={wp('100%') / 8} />
        </TouchableOpacity>
        <Text style={styles.pickerText}>{LANGUAGES[evidence].name}</Text>
        <TouchableOpacity style={{ width: wp('100%') / 8, alignItems: 'flex-end' }}>
          <Icon
            type='font-awesome-5'
            name='angle-right'
            size={wp('100%') / 8}
            onPress={() => {
              const newIndex = (evidence + 1) % LANGUAGES.length;
              setEvidence(newIndex);
              setLanguage(LANGUAGES[newIndex].key);
              storeData(LANGUAGE_KEY, LANGUAGES[newIndex].key);
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp('100%') / 15,
    width: wp('100%') / 1.5,
  }
});