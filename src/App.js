import Header from './components/Header';
import Footer from './components/Footer';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm  from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
          <div className='container'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </div> 
        <Footer />
      </Router>
    </FeedbackProvider> 
  );
}

export default App;
