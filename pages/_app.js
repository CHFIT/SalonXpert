import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout/main.js';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

  const WebSites = ({ Component, pageProps, router }) => {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: 'Reunión importante',
      start: new Date(2023, 10, 12, 10, 0),
      end: new Date(2023, 10, 12, 12, 0),
    },
    {
      title: 'Entrenamiento',
      start: new Date(2023, 10, 14, 14, 0),
      end: new Date(2023, 10, 14, 16, 0),
    },
  ];

  return (
    <ChakraProvider>
      <Layout>
        {/* Aquí se agrega el componente del calendario */}
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}
export default WebSites;