import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Form } from '../Form';
import { Sucess } from '../Sucess';


import { feedbackTypes } from '../../utils/feedbackTypes';

import { theme } from '../../theme';
import { styles } from './styles';

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen(){
    bottomSheetRef.current?.expand();
  }

  return (
    <>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleOpen}  
        >
          <ChatTeardropDots 
            size={24}
            weight='bold'
            color={theme.colors.text_on_brand_color}
          />
        </TouchableOpacity>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[1, 280]}
          backgroundStyle={styles.modal}
          handleIndicatorStyle={styles.indicator}
        >
          <Sucess />
        </BottomSheet>
    </>
  );
}

//export default gestureHandlerRootHOC(Widget);