import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { TestProvider } from './Hooks';
import response from './response.json';

jest.mock('./Hooks', () => ({
  ...jest.requireActual('./Hooks'),
}))

const wrapper = ({ children }) => <TestProvider value={response}>{children}</TestProvider>

test('list of repository', async () => {
  render(<App />, { wrapper });
  expect(await screen.findByText('Repository List')).toBeInTheDocument();
  response.forEach(({ name }) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

test('repository detail', async () => {
  render(<App />, { wrapper });
  expect(await screen.findByText('Repository List')).toBeInTheDocument();
  const [firstItem] = response;
  const firstElement = screen.getByText(firstItem.name);
  fireEvent.click(firstElement);
  expect(await screen.findByText('Repository detail')).toBeInTheDocument();
  expect(screen.getByText(firstItem.name)).toBeInTheDocument();
  expect(screen.getByText(firstItem.description)).toBeInTheDocument();
  expect(screen.getByText(firstItem.html_url)).toBeInTheDocument();
  expect(screen.getByText(firstItem.language)).toBeInTheDocument();
  expect(screen.getByText(firstItem.forks_count)).toBeInTheDocument();
  expect(screen.getByText(firstItem.open_issues_count)).toBeInTheDocument();
  expect(screen.getByText(firstItem.watchers)).toBeInTheDocument();

})
