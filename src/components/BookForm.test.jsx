import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookForm from './BookForm';

describe('BookForm', () => {
  test('shows validation errors when required fields are empty', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    const onCancel = vi.fn();

    render(
      <BookForm
        onSubmit={onSubmit}
        onCancel={onCancel}
        initialData={null}
        loading={false}
      />
    );

    const submitButton = screen.getByRole('button', {
      name: /add book/i,
    });

    await user.click(submitButton);

    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Author is required')).toBeInTheDocument();
    expect(screen.getByText('Category is required')).toBeInTheDocument();
    expect(
      screen.getByText('Published date is required')
    ).toBeInTheDocument();

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
test('submits the form when valid data is provided', async () => {
  const user = userEvent.setup();
  const onSubmit = vi.fn();
  const onCancel = vi.fn();

  render(
    <BookForm
      onSubmit={onSubmit}
      onCancel={onCancel}
      initialData={null}
      loading={false}
    />
  );

  await user.type(
    screen.getByPlaceholderText('Enter book title'),
    'Clean Code'
  );

  await user.type(
    screen.getByPlaceholderText('Enter author name'),
    'Robert C. Martin'
  );

  await user.selectOptions(
    screen.getByRole('combobox'),
    'Programming'
  );

  await user.type(
  document.querySelector('input[name="publishedDate"]'),
  '2008-08-01'
);

  await user.type(
    screen.getByPlaceholderText('0.00'),
    '29.99'
  );

  await user.type(
    screen.getByPlaceholderText(/enter book description/i),
    'A book about writing clean code.'
  );

  await user.click(
    screen.getByRole('button', { name: /add book/i })
  );

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit.mock.calls[0][0]).toBeInstanceOf(FormData);

  const submittedData = onSubmit.mock.calls[0][0];

  expect(submittedData.get('title')).toBe('Clean Code');
  expect(submittedData.get('author')).toBe('Robert C. Martin');
  expect(submittedData.get('category')).toBe('Programming');
  expect(submittedData.get('publishedDate')).toBe('2008-08-01');
  expect(submittedData.get('price')).toBe('29.99');
  expect(submittedData.get('description')).toBe(
    'A book about writing clean code.'
  );
});