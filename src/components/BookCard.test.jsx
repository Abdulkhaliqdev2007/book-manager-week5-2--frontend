import { render, screen } from '@testing-library/react';
import BookCard from './BookCard';

describe('BookCard', () => {
  test('renders book information correctly', () => {
    const book = {
      _id: '123',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      price: 29.99,
      publishedDate: '2008-08-01',
    };

    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(
      <BookCard
        book={book}
        onEdit={onEdit}
        onDelete={onDelete}
        loading={false}
      />
    );

    expect(screen.getByText('Clean Code')).toBeInTheDocument();
    expect(screen.getByText('by Robert C. Martin')).toBeInTheDocument();
    expect(screen.getByText('Programming')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
    expect(screen.getByText('2008')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  test('calls edit and delete handlers when buttons are clicked', async () => {
    const book = {
      _id: '123',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      price: 29.99,
      publishedDate: '2008-08-01',
    };

    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(
      <BookCard
        book={book}
        onEdit={onEdit}
        onDelete={onDelete}
        loading={false}
      />
    );

    const editButton = screen.getByRole('button', { name: /edit/i });
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    await editButton.click();
    await deleteButton.click();

    expect(onEdit).toHaveBeenCalledWith(book);
    expect(onDelete).toHaveBeenCalledWith('123');
  });

  test('shows deleting state and disables buttons when loading', () => {
    const book = {
      _id: '123',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      price: 29.99,
      publishedDate: '2008-08-01',
    };

    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(
      <BookCard
        book={book}
        onEdit={onEdit}
        onDelete={onDelete}
        loading={true}
      />
    );

    expect(screen.getByText('Deleting...')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /edit/i })
    ).toBeDisabled();

    expect(
      screen.getByRole('button', { name: /deleting/i })
    ).toBeDisabled();
  });
});