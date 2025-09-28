import logo from './logo.svg'
import Main from "./components/main/Main"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <div className="text-center">
          <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
              <Main/>
          </section>
        </div>
      </QueryClientProvider>
  )
}

export default App
