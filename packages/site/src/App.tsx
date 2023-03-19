import Layout from './components/Layout';
import CardList from './components/CardList';
import CategoryList from './components/CategoryList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const data = {
  cards: {
    cardId1: {
      title: '인공지능 소개',
      contents:
        '인공 지능(AI)은 인간의 지능을 기계에 모방하는 것으로, 인간처럼 생각하고 배울 수 있도록 프로그래밍된 기계를 말합니다.',
      category: 'categoryId1',
      upvotes: 5,
    },
    cardId2: {
      title: '웹 개발 기초',
      contents:
        '웹 개발은 웹 사이트 또는 웹 애플리케이션을 만들고 유지하는 과정으로, 프론트엔드, 백엔드 및 풀스택 개발을 포함합니다.',
      category: 'categoryId2',
      upvotes: 10,
    },
    cardId3: {
      title: '머신러닝 개요',
      contents:
        '머신러닝은 인공지능의 하위 분야로, 컴퓨터가 데이터를 기반으로 학습하고 예측이나 결정을 내리는 알고리즘을 개발하는 것에 초점을 맞춥니다.',
      category: 'categoryId3',
      upvotes: 7,
    },
    cardId4: {
      title: '블록체인 기술',
      contents:
        '블록체인은 데이터를 컴퓨터 네트워크 전체에 안전하게, 변경 불가능하게, 투명하게 저장할 수 있는 분산 원장 기술입니다.',
      category: 'categoryId4',
      upvotes: 12,
    },
    cardId5: {
      title: '사이버 보안 기본',
      contents:
        '사이버 보안은 컴퓨터 시스템, 네트워크 및 데이터를 도난, 손상 또는 무단 액세스로부터 보호하여 기밀성, 무결성 및 가용성을 보장하는 것을 포함합니다.',
      category: 'categoryId5',
      upvotes: 8,
    },
  },
  categories: {
    categoryId1: {
      text: '🤖 인공지능',
    },
    categoryId2: {
      text: '🌐 웹 개발',
    },
    categoryId3: {
      text: '📊 머신러닝',
    },
    categoryId4: {
      text: '⛓️ 블록체인',
    },
    categoryId5: {
      text: '🔒 사이버 보안',
    },
  },
  upvotes: {
    // Example upvote data
  },
};

const items = Object.entries(data.cards).map(([key, value]) => ({
  id: key,
  ...value,
}));
const categories = Object.entries(data.categories).map(([key, value]) => ({
  id: key,
  ...value,
}));

function App() {
  return (
    <Router>
      <Layout>
        <Layout.Side>
          <h2 className="text-2xl font-bold mb-4">카테고리</h2>
          <CategoryList items={categories} />
        </Layout.Side>
        <Layout.Body>
          <h1 className="text-4xl font-bold uppercase">Prompts-kr</h1>
          <h4 className="text-xl font-semibold mb-16">
            Prompts-kr에 오신 것을 환영합니다!
            <br />
            수많은 한국어 ChatGPT 프롬프트를 찾아보고, 아이디어를 공유할 수
            있습니다.
            <br />
            다양한 분야와 주제로 활용 가능한 프롬프트가 기다리고 있습니다.
          </h4>
          <Routes>
            <Route path=":categoryId" element={<CardList items={items} />} />
          </Routes>
        </Layout.Body>
      </Layout>
    </Router>
  );
}

export default App;
