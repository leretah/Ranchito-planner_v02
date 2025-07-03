import { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';

const initialPosts = [
  {
    date: '7 julio',
    type: 'Imagen de producto con fondo urbano',
    product: 'Helado Cool Pops',
    title: '¡Un mordisco y empieza la aventura!',
    description: 'Helado azul brillante con fondo de grafiti y luces de neón. Perfecto para un post refrescante de lunes.',
    emotion: 'Diversión, frescura',
    style: 'Foto fotorrealista con colores pop',
    media: null,
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
    media: null,
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
    media: null,
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
    media: null,
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
    media: null,
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
            {post.media && (
              <img src={URL.createObjectURL(post.media)} alt="Media" className="w-full max-w-sm rounded" />
            )}
            {isEditor && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingIndex(index)}>Editar</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editar publicación</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2">
                    <Input
                      value={post.title}
                      onChange={e => updatePost(index, 'title', e.target.value)}
                      placeholder="Título"
                    />
                    <Textarea
                      value={post.description}
                      onChange={e => updatePost(index, 'description', e.target.value)}
                      placeholder="Descripción"
                    />
                    <Textarea
                      value={post.comments}
                      onChange={e => updatePost(index, 'comments', e.target.value)}
                      placeholder="Comentarios de revisión"
                    />
                    <Input
                      type="file"
                      onChange={e => updatePost(index, 'media', e.target.files[0])}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}