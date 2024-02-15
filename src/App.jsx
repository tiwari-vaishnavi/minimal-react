import React from 'react';
import './global.css'
import ThemeProvider from './theme'
import { SettingsDrawer, SettingsProvider } from './components/settings';
import {MotionLazy} from './components/animate/motion-lazy'
import Layout from './components/layout';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
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
                        <Dashboard/>
                      </Layout>
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
  );
}

export default App;
