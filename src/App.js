import ApplyForLoan from './components/ApplyForLoan'
import { FeatureCard } from './components/FeatureCard'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Subscribe } from './components/Subscribe'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <div className='App'>
      <Header />
      <div class='flex container mx-auto py-20'>
        <FeatureCard
          title='Business Loan'
          description='Achieve all your goals and aspirations; with the right kind of help'
        />
        <FeatureCard
          title='Business Loan'
          description='Achieve all your goals and aspirations; with the right kind of help'
        />
        <FeatureCard
          title='Business Loan'
          description='Achieve all your goals and aspirations; with the right kind of help'
        />
      </div>
      <div class='flex container mx-auto'>
        <Testimonials />
      </div>
      <ApplyForLoan />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
