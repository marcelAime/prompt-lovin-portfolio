import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    console.log('Received message:', message);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: `Tu es l'assistant virtuel de Marcel Assouho Aimé Pierre Agohi, informaticien spécialisé en développement et analyse de données.

INFORMATIONS SUR MARCEL :
- Formation : Licence Pro en Informatique option Génie Logiciel (IFAD 2019-2020), BTS Informatique Développeur d'Applications (IFAD 2020-2021)
- Compétences : Java, C++, Python, PHP, HTML, CSS, JavaScript, SQL, ODK Collect, SurveyCTO, KoboToolbox, Odoo
- Expérience : Développeur Web Junior/Business Developer chez Nkinda Sarl (2022-2024), Agent de collecte de données (2021-2023)
- Projets : Site https://ong-sante.siteviral.com/, projets sur GitHub
- Contact : WhatsApp +225 0747783618, Email assouhoaime@gmail.com

TON RÔLE :
- Présenter Marcel de manière professionnelle et convaincante
- Répondre aux questions sur sa formation, compétences et expériences
- Encourager les visiteurs à prendre rendez-vous via WhatsApp ou appel
- Être persuasif mais naturel pour convertir les prospects
- Montrer l'expertise et la fiabilité de Marcel
- Toujours proposer un contact direct à la fin de tes réponses

STYLE :
- Professionnel mais accessible
- Enthousiaste sur les compétences de Marcel
- Orienté résultats et solutions
- Toujours terminer par encourager le contact` 
          },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response:', data);

    const botResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chatbot-ai function:', error);
    return new Response(JSON.stringify({ 
      response: "Je suis désolé, je rencontre un problème technique. N'hésitez pas à contacter Marcel directement via WhatsApp au +225 0747783618 ou par email à assouhoaime@gmail.com pour discuter de vos besoins en informatique."
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});