import { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';

const initialPosts = [
  {
    date: '7 julio',
    type: 'Imagen de producto con fondo urbano',
    product: 'Helado Cool Pops',
    title: '¡Un mordisco y empieza la aventura!',
    description: 'Helado azul brillante con fondo de grafiti y luces de neón. Perfecto para un post refrescante de lunes.',
    emotion: 'Diversión, frescura',
    style: 'Foto fotorrealista con colores pop',
    media: [],
    comments: ''
  },
  {
    date: '8 julio',
    type: 'Foto intervenida con IA',
    product: 'Queso fresco',
    title: 'El Ranchito vive en tu refri',
    description: 'Escena mágica: una mano abre el refrigerador y se revela un portal dorado al campo, donde aparece la vaquita del Ranchito.',
    emotion: 'Magia cotidiana, ternura',
    style: 'Fotorrealismo mágico',
    media: [],
    comments: ''
  },
  {
    date: '9 julio',
    type: 'Post ilustrado emocional',
    product: 'Gelatina Delly Jelly',
    title: '¡Con gelatina, todo se transforma!',
    description: 'Niños jugando con gelatina mágica que brilla. Fondo de parque, energía infantil.',
    emotion: 'Alegría, imaginación',
    style: 'Ilustración 2D colorida',
    media: [],
    comments: ''
  },
  {
    date: '10 julio',
    type: 'Imagen animada 3D tipo Pixar',
    product: 'Yogurt Mini',
    title: '¡Vaquita sobre ruedas!',
    description: 'Vaquita con casco azul patinando con yogurt en la mano. Fondo de parque con mucho color.',
    emotion: 'Juego, aventura, simpatía',
    style: '3D animado tipo película',
    media: [],
    comments: ''
  },
  {
    date: '11 julio',
    type: 'Post educativo 3D',
    product: 'Botella reciclada Ranchito',
    title: 'Cuidar el planeta sabe rico',
    description: 'Niño reciclando botella acompañado por la vaquita del Ranchito. Escena urbana escolar.',
    emotion: 'Conciencia ecológica, aprendizaje',
    style: '3D educativo',
    media: [],
    comments: ''
  },
];

export default function RanchitoPlanner() {
  const [posts, setPosts] = useState(initialPosts);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditor, setIsEditor] = useState(true);

  const updatePost = (index, field, value) => {
    const updated = [...posts];
    updated[index][field] = value;
    setPosts(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Planificación Semanal El Ranchito</h1>
      {posts.map((post, index) => (
        <Card key={index} className="bg-white shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">{post.date} - {post.title}</h2>
            <p><strong>Tipo:</strong> {post.type}</p>
            <p><strong>Producto:</strong> {post.product}</p>
            <p><strong>Descripción:</strong> {post.description}</p>
            <p><strong>Valor emocional:</strong> {post.emotion}</p>
            <p><strong>Estilo visual:</strong> {post.style}</p>
            <p><strong>Comentarios:</strong> {post.comments}</p>
              {post.media && post.media.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.media.map((file, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(file)}
                      alt="Media"
                      className="w-full max-w-sm rounded"
                    />
                  ))}
                </div>
              )}
            {isEditor && (
              <Button onClick={() => setEditingIndex(index)}>Editar</Button>
            )}
          </CardContent>
        </Card>
      ))}
      {editingIndex !== null && (
        <Dialog open={true} onClose={() => setEditingIndex(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar publicación</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <Input
                value={posts[editingIndex].title}
                onChange={e => updatePost(editingIndex, 'title', e.target.value)}
                placeholder="Título"
              />
              <Textarea
                value={posts[editingIndex].description}
                onChange={e => updatePost(editingIndex, 'description', e.target.value)}
                placeholder="Descripción"
              />
              <Textarea
                value={posts[editingIndex].comments}
                onChange={e => updatePost(editingIndex, 'comments', e.target.value)}
                placeholder="Comentarios de revisión"
              />
              <Input
                type="file"
                multiple
                onChange={e =>
                  updatePost(editingIndex, 'media', Array.from(e.target.files))
                }
              />
              <Button onClick={() => setEditingIndex(null)}>Cerrar</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}