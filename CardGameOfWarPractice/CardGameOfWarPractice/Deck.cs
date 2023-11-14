using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace CardGameOfWarPractice
{
    internal class Deck
    {
        private List<Card> cards;

        public Deck()
        {
            cards = new List<Card>();
            string[] suits = { "Hearts", "Diamonds", "Spades", "Clubs" };

            foreach (var suit in suits)
            {
                for (int value = 1; value <= 13; value++)
                {
                    cards.Add(new Card(suit, value));
                }
            }
        }


        public void Shuffle()
        {
            Random rng = new Random();
            int n = cards.Count;

            while (n > 1)
            {
                n--;
                int k = rng.Next(n);
                var value = cards[k];
                cards[k] = cards[n];
                cards[n] = value;
            }            
        }

        public Card DealOneCard()
        {
            if (cards.Count > 0)
            {
                var card = cards[0];
                cards.RemoveAt(0);
                return card;
            }
            else
            {
                return null;
            }
         }

        public bool HasCards()
        {
            return cards.Count > 0;
        }
    }
}
