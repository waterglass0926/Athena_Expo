import BottomSheet from '@gorhom/bottom-sheet';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CommentModal } from './CommentModal';
import { clearModal } from '@/stores/tiktok/v2/modal';

export const Modal = () => {
  const modalState = useSelector(state => state.tiktokV2Modal);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalState.open && bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }, [modalState]);

  const renderContent = () => {
    switch (modalState.modalType) {
      case 0:
        if (modalState.data) {
          return (
            <CommentModal
              post={modalState.data}
              onCommentSend={modalState.onCommentSend}
            />
          );
        }
        return <></>;
      default:
        return <></>;
    }
  };

  const onClose = () => {
    dispatch(clearModal());
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['50%']}
      index={-1}
      onClose={onClose}
      handleHeight={40}
      enablePanDownToClose
    >
      {renderContent()}
    </BottomSheet>
  );
};