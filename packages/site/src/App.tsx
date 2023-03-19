import { Text, Container } from '@nextui-org/react';

import Layout from './components/Layout';
import CardList from './components/CardList';

const items = [
  {
    id: '1',
    title: 'Introduction to AI',
    contents:
      'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, which are programmed to think and learn like humans.',
  },
  {
    id: '2',
    title: 'Web Development Basics',
    contents:
      'Web development is the process of creating and maintaining websites or web applications, which involves front-end, back-end, and full-stack development.',
  },
  {
    id: '3',
    title: '머신러닝 개요',
    contents:
      '머신러닝은 인공지능의 하위 분야로, 컴퓨터가 데이터를 기반으로 학습하고 예측이나 결정을 내리는 알고리즘을 개발하는 것에 초점을 맞춥니다.',
  },
  {
    id: '4',
    title: '블록체인 기술',
    contents:
      '블록체인은 데이터를 컴퓨터 네트워크 전체에 안전하게, 변경 불가능하게, 투명하게 저장할 수 있는 분산 원장 기술입니다.',
  },
  {
    id: '5',
    title: 'Cybersecurity Essentials',
    contents:
      'Cybersecurity involves the protection of computer systems, networks, and data from theft, damage, or unauthorized access, ensuring confidentiality, integrity, and availability.',
  },
];

function App() {
  return (
    <Layout>
      <Layout.Side>
        <h2 className="text-xl font-bold mb-4">Left Column</h2>
      </Layout.Side>
      <Layout.Body>
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

        <CardList items={items} />
      </Layout.Body>
    </Layout>
  );
}

export default App;
