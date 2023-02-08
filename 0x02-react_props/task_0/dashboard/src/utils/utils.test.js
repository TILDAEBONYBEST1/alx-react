import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

it('getFullYear', () => {
  expect(getFullYear()).toEqual(new Date().getFullYear());
});
it('getFooterCopy with true', () => {
  expect(getFooterCopy(true)).toEqual('Alx School');
});
it('getFooterCopy with false', () => {
  expect(getFooterCopy(false)).toEqual('Alx School main dashboard');
});
it('getLatestNotification', () => {
  expect(getLatestNotification()).toEqual(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
