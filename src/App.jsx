import React from 'react';
import './global.css'
import ThemeProvider from './theme'
import { SettingsDrawer, SettingsProvider } from './components/settings';
import {MotionLazy} from './components/animate/motion-lazy'
import Layout from './components/layout';
import PostNewEditForm from './pages/blog/post-new-edit-form';
import { LocalizationProvider } from './components/locales';
function App() {
  return (
    <LocalizationProvider>
            <SettingsProvider
              defaultSettings={{
                themeMode: 'light', // 'light' | 'dark'
                themeDirection: 'ltr', //  'rtl' | 'ltr'
                themeContrast: 'default', // 'default' | 'bold'
                themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
                themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                themeStretch: false,
              }}
            >
              <ThemeProvider>
                <MotionLazy>
                      <SettingsDrawer />
                      <Layout>
                        <PostNewEditForm/>
                      </Layout>
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
            </LocalizationProvider>
  );
}

export default App;
