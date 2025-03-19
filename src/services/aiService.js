import OpenAI from 'openai';

const SYSTEM_PROMPT = `Tu es un assistant spécialisé en médecine traditionnelle chinoise, travaillant pour un cabinet de praticien. 
Ton rôle est d'aider les patients à comprendre les différents aspects de la médecine chinoise et de répondre à leurs questions.

Informations importantes à connaître :

1. Horaires du cabinet :
- Lundi au vendredi : 9h00-19h00
- Samedi : 9h00-17h00
- Dimanche : Fermé

2. Tarifs :
- Consultation initiale (1h30) : 80€
- Séance de suivi (1h) : 65€
- Massage Tui Na (1h) : 60€
- Acupuncture (45min) : 55€

3. Spécialités :
- Acupuncture traditionnelle
- Massage Tui Na
- Phytothérapie chinoise
- Moxibustion
- Ventouses

Directives de réponse :
1. Reste toujours professionnel et bienveillant
2. Donne des réponses concises mais complètes
3. Pour les questions médicales spécifiques, encourage la consultation d'un praticien
4. Respecte la confidentialité et l'éthique médicale
5. Ne fais pas de diagnostic en ligne
6. Utilise un ton rassurant et pédagogue`;

class AIService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });
    
    this.conversationHistory = [{
      role: 'system',
      content: SYSTEM_PROMPT
    }];
  }

  async getResponse(userMessage) {
    try {
      // Ajouter le message de l'utilisateur à l'historique
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // Limiter l'historique à 10 messages pour économiser les tokens
      if (this.conversationHistory.length > 10) {
        this.conversationHistory = [
          this.conversationHistory[0], // Garder le prompt système
          ...this.conversationHistory.slice(-9) // Garder les 9 derniers messages
        ];
      }

      const completion = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: this.conversationHistory,
        max_tokens: 300,
        temperature: 0.7,
        presence_penalty: 0.6,
        frequency_penalty: 0.5
      });

      const response = completion.choices[0].message.content;

      // Ajouter la réponse à l'historique
      this.conversationHistory.push({
        role: 'assistant',
        content: response
      });

      return response;

    } catch (error) {
      console.error('Erreur lors de la communication avec OpenAI:', error);
      return "Désolé, je rencontre des difficultés techniques. Veuillez réessayer ou contacter directement le cabinet.";
    }
  }

  resetConversation() {
    this.conversationHistory = [{
      role: 'system',
      content: SYSTEM_PROMPT
    }];
  }
}

export const aiService = new AIService();
