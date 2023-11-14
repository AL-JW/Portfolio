using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace CardGameOfWarPractice
{
    internal class Player
    {
        public string Name {  get; set; }
        public List<Card> Hand { get; set; }

        public Player(string name)
        {
            this.Name = name;
            this.Hand = new List<Card>();
        }

        public void ReceiveCard(Card card)
        {
            Hand.Add(card);
        }


        public Card PlayCard()
        {
            if(Hand.Count > 0) 
            {
                Card card = Hand[0];
                Hand.RemoveAt(0);
                return card;
            }
            else
            {
                return null; 
            }
        }

        public bool HasCards()
        {
            return Hand.Count > 0;
        }

    }
}
