import { Text, Container } from '@nextui-org/react';

import CardList from './components/CardList';

function App() {
  return (
    <div className="flex flex-wrap min-h-screen bg-gray-50">
      <div className="w-full lg:w-60 lg:max-w-mdp-4 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Left Column</h2>
      </div>

      <div className="w-full lg:w-auto lg:flex-1 mt-4 lg:mt-0 bg-white">
        <Container fluid>
          <Text h1 transform="uppercase">
            Prompts-kr
          </Text>
          <Text h4>
            Prompts-kr에 오신 것을 환영합니다!
            <br />
            수많은 한국어 ChatGPT 프롬프트를 찾아보고, 아이디어를 공유할 수
            있습니다.
            <br />
            다양한 분야와 주제로 활용 가능한 프롬프트가 기다리고 있습니다.
          </Text>
        </Container>
        <CardList />
      </div>
    </div>
  );
}

export default App;
