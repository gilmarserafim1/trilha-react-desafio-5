import { supabase } from './supabase';

export const getPosts = async () => {
    try {
      const { data: posts, error } = await supabase
        .from('posts')
        .select('*')

        if(error){
          console.log('Erro ao buscar posts: ', error)
        } else {
          return posts;
        }
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };

export const getPostBySlug = async (id) => {
  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

      if(error){
        console.log('Erro ao buscar posts: ', error)
      } else {
        return post;
      }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}